import { UseRootReturn, UseRootProps } from "src/types/root.type";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// import * as fs from 'fs';
// import * as path from 'path';
import RunwayML from '@runwayml/sdk';
import { useEffect, useState } from "react";
import { ENDPOINTS } from "src/constants/root";

export const useRoot = (_?: UseRootProps): UseRootReturn => {
    const dispatch = useDispatch()
    const { t } = useTranslation();

    const [isLoading, setIsLoading] = useState(false);
    
    let taskId: string = ''
    const [promptText, setPromptText] = useState('A futuristic motorcycle rider in a neon-lit cyberpunk city, speeding through the streets at night. Rain pours down, reflecting neon signs on the wet pavement. The rider performs a smooth drift around a corner, with sparks flying from the tires. The camera follows dynamically, shaking slightly with the motion')
    const [promptImage, setPromptImage] = useState<string|null>()
    const isReady = !isLoading && !!taskId

    useEffect(() => {
        fetch("/images/motorcycle.png")
        .then((res) => res.blob())
        .then((blob) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPromptImage(reader.result as string)
            };
            reader.readAsDataURL(blob);
        })
        .catch((error) => {
            console.error("Error fetching image:", error);
        });
    }, []);

    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const generateVideo = async () => {
        setError(null);
        setResult(null);

        try {
            setIsLoading(true);
            const response = await fetch(ENDPOINTS.POST.IMAGE_TO_VIDEO, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // even thought the RUNWAY SDK says that supports base64 it throws "Error calling RunwayML API: BadRequestError: 400 {"error":"promptImage: String must contain at most 5242880 character(s)"}"
                    // SUGGESTION: store on s3 and send the pre-signed URL (needs to be HTTPS)
                    promptImage, 
                    promptText,
                    ai: "RUNWAY"
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to generate video");
            }

            const data = await response.json();
            setResult(data);
        } catch (error) {
            setError("Error generating video");
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInput = (value: string) => {
        setPromptText(value);
    };

    return {
        state: {
            title: t("projectName"),
            description: t("projectDescription"),
            isLoading,
            isReady,
            result,
            error,
            promptText,
        },
        controller: {
            handleInput,
            generateVideo,
        }
    }
}