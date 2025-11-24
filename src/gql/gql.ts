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
    "\n  fragment ProfileFragment on Profile {\n    id\n    company_name\n    logo_image\n    phone_no\n    email\n    address\n    city\n    title\n    signature_image\n    currency\n    tax\n    discount_percentage\n    phone_number_country_code\n  }\n": types.ProfileFragmentFragmentDoc,
    "\n  mutation DownloadReceiptPDF($input: DownloadPDF!) {\n    downloadReceiptPDF(input: $input)\n  }\n": types.DownloadReceiptPdfDocument,
    "\n  mutation SaveReceipt($input: DownloadPDF!) {\n    saveReceipt(input: $input)\n  }\n": types.SaveReceiptDocument,
    "\n  mutation SendReceiptPDFToEmail($input: SendReceiptPDFToEmail!) {\n    sendReceiptPDFToEmail(input: $input)\n  }\n": types.SendReceiptPdfToEmailDocument,
    "\n  mutation SendReceiptPDFToWhatsApp($input: SendReceiptPDFToWhatsApp!) {\n    sendReceiptPDFToWhatsApp(input: $input)\n  }\n": types.SendReceiptPdfToWhatsAppDocument,
    "\n  mutation UpdateProfile($input: UpdateProfile!) {\n    updateProfile(input: $input) {\n      ...ProfileFragment\n    }\n  }\n": types.UpdateProfileDocument,
    "\n  query SearchProducts($query: String) {\n    searchProducts(query: $query) {\n      name\n      user_id\n      unit_price\n      id\n    }\n  }\n": types.SearchProductsDocument,
    "\n  query UserProfile($userId: String!) {\n    profileByUserId(userId: $userId) {\n      ...ProfileFragment\n    }\n  }\n": types.UserProfileDocument,
    "\n  fragment ProductFragment on Product {\n    id\n    name\n    unit_price\n    user_id\n    quantity\n  }\n": types.ProductFragmentFragmentDoc,
    "\n  mutation CreateProduct($input: CreateProduct!) {\n    createProduct(input: $input) {\n      ...ProductFragment\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation DeleteProduct($id: ID!) {\n    deleteProduct(id: $id)\n  }\n": types.DeleteProductDocument,
    "\n  mutation UpdateProduct($input: UpdateProduct!) {\n    updateProduct(input: $input) {\n      ...ProductFragment\n    }\n  }\n": types.UpdateProductDocument,
    "\n  query Products {\n    products {\n      ...ProductFragment\n    }\n  }\n": types.ProductsDocument,
    "\n  mutation VerifyReceiptFile($file: Upload!) {\n    verifyReceiptFile(file: $file)\n  }\n": types.VerifyReceiptFileDocument,
    "\n  fragment ReceiptFragment on Receipt {\n    id\n    receipt_name\n    recipient_name\n    recipient_phone\n    recipient_email\n    recipient_address\n    receipt_no\n    user_id\n    date\n    payment_method\n    payment_note\n    total_amount\n    discount_amount\n    sub_total_amount\n    tax_amount\n    is_receipt_send\n  }\n": types.ReceiptFragmentFragmentDoc,
    "\n  mutation DownloadReceiptPDFWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n  ) {\n    downloadEncryptedReceiptPDFWithReceiptId(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n    )\n  }\n": types.DownloadReceiptPdfWithReceiptIdDocument,
    "\n  mutation SendReceiptPDFToEmailWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n    $email: String!\n  ) {\n    sendEncryptedReceiptPDFToEmailWithReceiptID(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n      email: $email\n    )\n  }\n": types.SendReceiptPdfToEmailWithReceiptIdDocument,
    "\n  mutation SendReceiptPDFToWhatsAppWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n    $phoneNumber: String!\n  ) {\n    sendEncryptedReceiptPDFToWhatsAppWithReceiptID(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n      phoneNumber: $phoneNumber\n    )\n  }\n": types.SendReceiptPdfToWhatsAppWithReceiptIdDocument,
    "\n  query Receipt($id: ID!) {\n    encryptedReceipt(id: $id) {\n      ...ReceiptFragment\n      Services {\n        id\n        description\n        rate\n        quantity\n        amount\n      }\n    }\n  }\n": types.ReceiptDocument,
    "\n  query ReceiptEmailAndPhoneNo($id: ID!) {\n    receipt(id: $id) {\n      recipient_phone\n      recipient_email\n    }\n  }\n": types.ReceiptEmailAndPhoneNoDocument,
    "\n  query SearchReceipts(\n    $page: Int!\n    $year: Int\n    $date: String\n    $dateRange: [String!]\n  ) {\n    searchReceipts(\n      page: $page\n      year: $year\n      date: $date\n      dateRange: $dateRange\n    ) {\n      totalCount\n      foundCount\n      totalAmount\n      receipts {\n        id\n        receipt_name\n        recipient_name\n        recipient_phone\n        recipient_email\n        recipient_address\n        receipt_no\n        user_id\n        date\n        total_amount\n        payment_method\n        is_receipt_send\n      }\n    }\n  }\n": types.SearchReceiptsDocument,
    "\n  query GetUserReceipts {\n    receipts {\n      edges {\n        node {\n          ...ReceiptFragment\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n": types.GetUserReceiptsDocument,
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
export function graphql(source: "\n  fragment ProfileFragment on Profile {\n    id\n    company_name\n    logo_image\n    phone_no\n    email\n    address\n    city\n    title\n    signature_image\n    currency\n    tax\n    discount_percentage\n    phone_number_country_code\n  }\n"): (typeof documents)["\n  fragment ProfileFragment on Profile {\n    id\n    company_name\n    logo_image\n    phone_no\n    email\n    address\n    city\n    title\n    signature_image\n    currency\n    tax\n    discount_percentage\n    phone_number_country_code\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DownloadReceiptPDF($input: DownloadPDF!) {\n    downloadReceiptPDF(input: $input)\n  }\n"): (typeof documents)["\n  mutation DownloadReceiptPDF($input: DownloadPDF!) {\n    downloadReceiptPDF(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SaveReceipt($input: DownloadPDF!) {\n    saveReceipt(input: $input)\n  }\n"): (typeof documents)["\n  mutation SaveReceipt($input: DownloadPDF!) {\n    saveReceipt(input: $input)\n  }\n"];
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
export function graphql(source: "\n  query SearchProducts($query: String) {\n    searchProducts(query: $query) {\n      name\n      user_id\n      unit_price\n      id\n    }\n  }\n"): (typeof documents)["\n  query SearchProducts($query: String) {\n    searchProducts(query: $query) {\n      name\n      user_id\n      unit_price\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserProfile($userId: String!) {\n    profileByUserId(userId: $userId) {\n      ...ProfileFragment\n    }\n  }\n"): (typeof documents)["\n  query UserProfile($userId: String!) {\n    profileByUserId(userId: $userId) {\n      ...ProfileFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductFragment on Product {\n    id\n    name\n    unit_price\n    user_id\n    quantity\n  }\n"): (typeof documents)["\n  fragment ProductFragment on Product {\n    id\n    name\n    unit_price\n    user_id\n    quantity\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateProduct($input: CreateProduct!) {\n    createProduct(input: $input) {\n      ...ProductFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProduct($input: CreateProduct!) {\n    createProduct(input: $input) {\n      ...ProductFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteProduct($id: ID!) {\n    deleteProduct(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteProduct($id: ID!) {\n    deleteProduct(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProduct($input: UpdateProduct!) {\n    updateProduct(input: $input) {\n      ...ProductFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProduct($input: UpdateProduct!) {\n    updateProduct(input: $input) {\n      ...ProductFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Products {\n    products {\n      ...ProductFragment\n    }\n  }\n"): (typeof documents)["\n  query Products {\n    products {\n      ...ProductFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation VerifyReceiptFile($file: Upload!) {\n    verifyReceiptFile(file: $file)\n  }\n"): (typeof documents)["\n  mutation VerifyReceiptFile($file: Upload!) {\n    verifyReceiptFile(file: $file)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ReceiptFragment on Receipt {\n    id\n    receipt_name\n    recipient_name\n    recipient_phone\n    recipient_email\n    recipient_address\n    receipt_no\n    user_id\n    date\n    payment_method\n    payment_note\n    total_amount\n    discount_amount\n    sub_total_amount\n    tax_amount\n    is_receipt_send\n  }\n"): (typeof documents)["\n  fragment ReceiptFragment on Receipt {\n    id\n    receipt_name\n    recipient_name\n    recipient_phone\n    recipient_email\n    recipient_address\n    receipt_no\n    user_id\n    date\n    payment_method\n    payment_note\n    total_amount\n    discount_amount\n    sub_total_amount\n    tax_amount\n    is_receipt_send\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DownloadReceiptPDFWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n  ) {\n    downloadEncryptedReceiptPDFWithReceiptId(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n    )\n  }\n"): (typeof documents)["\n  mutation DownloadReceiptPDFWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n  ) {\n    downloadEncryptedReceiptPDFWithReceiptId(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendReceiptPDFToEmailWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n    $email: String!\n  ) {\n    sendEncryptedReceiptPDFToEmailWithReceiptID(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n      email: $email\n    )\n  }\n"): (typeof documents)["\n  mutation SendReceiptPDFToEmailWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n    $email: String!\n  ) {\n    sendEncryptedReceiptPDFToEmailWithReceiptID(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n      email: $email\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendReceiptPDFToWhatsAppWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n    $phoneNumber: String!\n  ) {\n    sendEncryptedReceiptPDFToWhatsAppWithReceiptID(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n      phoneNumber: $phoneNumber\n    )\n  }\n"): (typeof documents)["\n  mutation SendReceiptPDFToWhatsAppWithReceiptId(\n    $receiptId: String!\n    $orginazationId: String!\n    $phoneNumber: String!\n  ) {\n    sendEncryptedReceiptPDFToWhatsAppWithReceiptID(\n      receiptId: $receiptId\n      orginazationId: $orginazationId\n      phoneNumber: $phoneNumber\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Receipt($id: ID!) {\n    encryptedReceipt(id: $id) {\n      ...ReceiptFragment\n      Services {\n        id\n        description\n        rate\n        quantity\n        amount\n      }\n    }\n  }\n"): (typeof documents)["\n  query Receipt($id: ID!) {\n    encryptedReceipt(id: $id) {\n      ...ReceiptFragment\n      Services {\n        id\n        description\n        rate\n        quantity\n        amount\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReceiptEmailAndPhoneNo($id: ID!) {\n    receipt(id: $id) {\n      recipient_phone\n      recipient_email\n    }\n  }\n"): (typeof documents)["\n  query ReceiptEmailAndPhoneNo($id: ID!) {\n    receipt(id: $id) {\n      recipient_phone\n      recipient_email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchReceipts(\n    $page: Int!\n    $year: Int\n    $date: String\n    $dateRange: [String!]\n  ) {\n    searchReceipts(\n      page: $page\n      year: $year\n      date: $date\n      dateRange: $dateRange\n    ) {\n      totalCount\n      foundCount\n      totalAmount\n      receipts {\n        id\n        receipt_name\n        recipient_name\n        recipient_phone\n        recipient_email\n        recipient_address\n        receipt_no\n        user_id\n        date\n        total_amount\n        payment_method\n        is_receipt_send\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchReceipts(\n    $page: Int!\n    $year: Int\n    $date: String\n    $dateRange: [String!]\n  ) {\n    searchReceipts(\n      page: $page\n      year: $year\n      date: $date\n      dateRange: $dateRange\n    ) {\n      totalCount\n      foundCount\n      totalAmount\n      receipts {\n        id\n        receipt_name\n        recipient_name\n        recipient_phone\n        recipient_email\n        recipient_address\n        receipt_no\n        user_id\n        date\n        total_amount\n        payment_method\n        is_receipt_send\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserReceipts {\n    receipts {\n      edges {\n        node {\n          ...ReceiptFragment\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserReceipts {\n    receipts {\n      edges {\n        node {\n          ...ReceiptFragment\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;