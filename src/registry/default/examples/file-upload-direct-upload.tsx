"use client";

import * as React from "react";
import { LuUpload, LuX } from "react-icons/lu";
import { toast } from "sonner";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadItemProgress,
  FileUploadList,
  FileUploadTrigger,
  type FileUploadProps,
} from "@/registry/default/ui/file-upload";

export default function FileUploadDirectUpload() {
  const [files, setFiles] = React.useState<File[]>([]);

  const onUpload: NonNullable<FileUploadProps["onUpload"]> = React.useCallback(
    async (files, { onProgress, onSuccess, onError }) => {
      try {
        // Process each file individually
        const uploadPromises = files.map(async (file) => {
          try {
            // Simulate file upload with progress
            const totalChunks = 10;
            let uploadedChunks = 0;

            // Simulate chunk upload with delays
            for (let i = 0; i < totalChunks; i++) {
              // Simulate network delay (100-300ms per chunk)
              await new Promise((resolve) => setTimeout(resolve, Math.random() * 200 + 100));

              // Update progress for this specific file
              uploadedChunks++;
              const progress = (uploadedChunks / totalChunks) * 100;
              onProgress(file, progress);
            }

            // Simulate server processing delay
            await new Promise((resolve) => setTimeout(resolve, 500));
            onSuccess(file);
          } catch (error) {
            onError(file, error instanceof Error ? error : new Error("Upload failed"));
          }
        });

        // Wait for all uploads to complete
        await Promise.all(uploadPromises);
      } catch (error) {
        // This handles any error that might occur outside the individual upload processes
        console.error("Unexpected error during upload:", error);
      }
    },
    []
  );

  const onFileReject = React.useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
    });
  }, []);

  return (
    <FileUpload
      value={files}
      onValueChange={setFiles}
      onUpload={onUpload}
      onFileReject={onFileReject}
      maxFiles={2}
      css={{ w: "full", maxW: "md" }}
      multiple
    >
      <FileUploadDropzone>
        <styled.div
          css={{
            display: "flex",
            flexDir: "column",
            alignItems: "center",
            gap: "1",
            textAlign: "center",
          }}
        >
          <styled.div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              rounded: "full",
              borderWidth: "1px",
              p: "2.5",
            }}
          >
            <LuUpload className={css({ w: "6", h: "6", color: "muted.fg" })} />
          </styled.div>
          <styled.p css={{ fontWeight: "medium", textStyle: "sm" }}>
            Drag & drop files here
          </styled.p>
          <styled.p css={{ color: "muted.fg", textStyle: "xs" }}>
            Or click to browse (max 2 files)
          </styled.p>
        </styled.div>
        <FileUploadTrigger asChild>
          <Button variant="outline" size="sm" css={{ mt: "2", w: "fit" }}>
            Browse files
          </Button>
        </FileUploadTrigger>
      </FileUploadDropzone>
      <FileUploadList>
        {files.map((file, index) => (
          <FileUploadItem key={index} value={file} css={{ flexDir: "column" }}>
            <styled.div css={{ display: "flex", w: "full", alignItems: "center", gap: "2" }}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" css={{ w: "7", h: "7" }}>
                  <LuX />
                </Button>
              </FileUploadItemDelete>
            </styled.div>
            <FileUploadItemProgress />
          </FileUploadItem>
        ))}
      </FileUploadList>
    </FileUpload>
  );
}
