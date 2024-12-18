/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment ProfileFragment on Profile {\n    id\n    company_name\n    logo_image\n    phone_no\n    email\n    address\n    city\n    title\n    signature_image\n    currency\n    tax\n    phone_number_country_code\n  }\n": types.ProfileFragmentFragmentDoc,
    "\n  mutation DownloadReceiptPDF($input: DownloadPDF!) {\n    downloadReceiptPDF(input: $input)\n  }\n": types.DownloadReceiptPdfDocument,
    "\n  mutation SendReceiptPDFToEmail($input: SendReceiptPDFToEmail!) {\n    sendReceiptPDFToEmail(input: $input)\n  }\n": types.SendReceiptPdfToEmailDocument,
    "\n  mutation SendReceiptPDFToWhatsApp($input: SendReceiptPDFToWhatsApp!) {\n    sendReceiptPDFToWhatsApp(input: $input)\n  }\n": types.SendReceiptPdfToWhatsAppDocument,
    "\n  mutation UpdateProfile($input: UpdateProfile!) {\n    updateProfile(input: $input) {\n      ...ProfileFragment\n    }\n  }\n": types.UpdateProfileDocument,
    "\n  query UserProfile($userId: String!) {\n    profileByUserId(userId: $userId) {\n      ...ProfileFragment\n    }\n  }\n": types.UserProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProfileFragment on Profile {\n    id\n    company_name\n    logo_image\n    phone_no\n    email\n    address\n    city\n    title\n    signature_image\n    currency\n    tax\n    phone_number_country_code\n  }\n"): (typeof documents)["\n  fragment ProfileFragment on Profile {\n    id\n    company_name\n    logo_image\n    phone_no\n    email\n    address\n    city\n    title\n    signature_image\n    currency\n    tax\n    phone_number_country_code\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DownloadReceiptPDF($input: DownloadPDF!) {\n    downloadReceiptPDF(input: $input)\n  }\n"): (typeof documents)["\n  mutation DownloadReceiptPDF($input: DownloadPDF!) {\n    downloadReceiptPDF(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendReceiptPDFToEmail($input: SendReceiptPDFToEmail!) {\n    sendReceiptPDFToEmail(input: $input)\n  }\n"): (typeof documents)["\n  mutation SendReceiptPDFToEmail($input: SendReceiptPDFToEmail!) {\n    sendReceiptPDFToEmail(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendReceiptPDFToWhatsApp($input: SendReceiptPDFToWhatsApp!) {\n    sendReceiptPDFToWhatsApp(input: $input)\n  }\n"): (typeof documents)["\n  mutation SendReceiptPDFToWhatsApp($input: SendReceiptPDFToWhatsApp!) {\n    sendReceiptPDFToWhatsApp(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfile($input: UpdateProfile!) {\n    updateProfile(input: $input) {\n      ...ProfileFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($input: UpdateProfile!) {\n    updateProfile(input: $input) {\n      ...ProfileFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserProfile($userId: String!) {\n    profileByUserId(userId: $userId) {\n      ...ProfileFragment\n    }\n  }\n"): (typeof documents)["\n  query UserProfile($userId: String!) {\n    profileByUserId(userId: $userId) {\n      ...ProfileFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;