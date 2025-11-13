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
  FileUploadList,
  FileUploadTrigger,
} from "@/registry/default/ui/file-upload";

export default function FileUploadValidation() {
  const [files, setFiles] = React.useState<File[]>([]);

  const onFileValidate = React.useCallback(
    (file: File): string | null => {
      // Validate max files
      if (files.length >= 2) {
        return "You can only upload up to 2 files";
      }

      // Validate file type (only images)
      if (!file.type.startsWith("image/")) {
        return "Only image files are allowed";
      }

      // Validate file size (max 2MB)
      const MAX_SIZE = 2 * 1024 * 1024; // 2MB
      if (file.size > MAX_SIZE) {
        return `File size must be less than ${MAX_SIZE / (1024 * 1024)}MB`;
      }

      return null;
    },
    [files]
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
      onFileValidate={onFileValidate}
      onFileReject={onFileReject}
      accept="image/*"
      maxFiles={2}
      css={{ w: "full", maxW: "md" }}
      multiple
    >
      <FileUploadDropzone>
        <styled.div css={{ display: "flex", flexDir: "column", alignItems: "center", gap: "1" }}>
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
        {files.map((file) => (
          <FileUploadItem key={file.name} value={file}>
            <FileUploadItemPreview />
            <FileUploadItemMetadata />
            <FileUploadItemDelete asChild>
              <Button variant="ghost" size="icon" css={{ w: "7", h: "7" }}>
                <LuX />
              </Button>
            </FileUploadItemDelete>
          </FileUploadItem>
        ))}
      </FileUploadList>
    </FileUpload>
  );
}
