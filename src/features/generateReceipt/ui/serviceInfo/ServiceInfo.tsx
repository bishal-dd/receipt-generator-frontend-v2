"use client";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function ServiceInfo() {
  const [items, setItems] = useState([
    { description: "", quantity: 1, unitPrice: 0, total: 0 },
  ]);
  const TAX_RATE = 0.08;

  const addRow = () => {
    setItems([
      ...items,
      { description: "", quantity: 1, unitPrice: 0, total: 0 },
    ]);
  };

  const removeRow = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateRow = (index: number, field: string, value: any) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        const updatedValue =
          field === "quantity" || field === "unitPrice"
            ? parseFloat(value) || 0 // Default to 0 if parsing fails
            : value;

        const updatedItem = { ...item, [field]: updatedValue };

        // Update total only if both quantity and unitPrice are valid numbers
        const total =
          parseFloat(String(updatedItem.quantity)) *
          parseFloat(String(updatedItem.unitPrice));
        return { ...updatedItem, total: isNaN(total) ? 0 : total };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Actions</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Unit Price</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <button className="text-green-600 mr-2" onClick={addRow}>
                  <Plus />
                </button>
                <button
                  className="text-red-600"
                  onClick={() => removeRow(index)}
                >
                  <Minus />
                </button>
              </TableCell>
              <TableCell>
                <Input
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    updateRow(index, "description", e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="text-right">
                <Input
                  type="number"
                  className="w-20"
                  value={item.quantity || ""}
                  onChange={(e) => updateRow(index, "quantity", e.target.value)}
                />
              </TableCell>
              <TableCell className="text-right">
                <Input
                  type="number"
                  value={item.unitPrice || ""}
                  className="w-50"
                  onChange={(e) =>
                    updateRow(index, "unitPrice", e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="text-right">
                ${item.total.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6 flex justify-end">
        <div className="w-1/2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
