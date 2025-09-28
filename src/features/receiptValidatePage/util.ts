// app/receipt-validate/util.ts
import { PDFDocument } from 'pdf-lib';

export async function extractReceiptID(file: File): Promise<string | null> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    // Search for the receipt ID in standard metadata fields
    const metadataFields = [
      pdfDoc.getTitle(),
      pdfDoc.getAuthor(),
      pdfDoc.getSubject(),
      pdfDoc.getKeywords(),
      pdfDoc.getCreator(),
      pdfDoc.getProducer(),
    ];
    console.log(metadataFields);
    for (const field of metadataFields) {
      if (field) {
        // Look for the "receipt-id" pattern in each field
        const match = field.match(/receipt-id:(\w+)/);
        if (match && match[1]) {
          return match[1];
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Failed to extract receipt ID:', error);
    return null;
  }
}
