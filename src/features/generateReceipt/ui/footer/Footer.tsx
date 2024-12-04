import { FileUpload, UpdateInput } from "@/components/utils";

type Props = {
  userId: string;
  organizationId: string;
  signature_image: string | undefined | null;
  updateSignature: (key: string) => void;
  updateTitle: (title: string) => void;
  title: string;
};
export function Footer({
  userId,
  organizationId,
  signature_image,
  updateSignature,
  updateTitle,
  title,
}: Props) {
  return (
    <div className="flex flex-col justify-items-start">
      <FileUpload
        width={200}
        height={150}
        defaultPreview={
          !signature_image || signature_image === "" ? null : signature_image
        }
        uploadText="Seal or Signature"
        userId={userId!}
        orginizationId={organizationId}
        onUpload={updateSignature}
      />
      <div className="mt-4 w-full max-w-md">
        <UpdateInput
          value={title}
          name="title"
          placeholder="Title"
          onChange={updateTitle}
          type="text"
          className="w-full text-center"
        />
      </div>
    </div>
  );
}
