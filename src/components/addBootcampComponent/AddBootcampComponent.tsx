import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, FormGroup, Label } from "reactstrap";

interface FormValues {
    title: string;
    imageUrl: string;
    details: string;
}

export const AddBootcampComponent = () => {
    const validationSchema = yup
        .object({
            title: yup.string().required().min(2),
            imageUrl: yup.string().required().min(5),
            details: yup.string().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        console.log("data", data);
    };

    return (
        <div className="add-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    {errors?.title?.message && (
                        <div className="text-danger error-message">{errors.title?.message?.toString()}</div>
                    )}
                    <input {...register("title")} autoFocus tabIndex={1} />

                    <Label for="imageUrl">Image url</Label>
                    {errors?.imageUrl?.message && (
                        <div className="text-danger error-message">{errors.imageUrl?.message?.toString()}</div>
                    )}
                    <input {...register("imageUrl")} tabIndex={2} />

                    <Label for="details">Details</Label>
                    {errors?.details?.message && (
                        <div className="text-danger error-message">{errors.details?.message?.toString()}</div>
                    )}
                    <textarea {...register("details")} tabIndex={3}></textarea>
                </FormGroup>

                <Button type="submit" tabIndex={4}>
                    Submit
                </Button>
            </form>
        </div>
    );
};
