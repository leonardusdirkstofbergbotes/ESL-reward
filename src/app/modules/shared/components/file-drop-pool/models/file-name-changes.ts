import { Strings } from "aws-sdk/clients/opsworks";

export interface FileNameChange{
    originalName: string,
    newName: string,
    error: string | null
}