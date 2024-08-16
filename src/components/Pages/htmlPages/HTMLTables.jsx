import React from "react";
import { Table, Info, Columns, AlignJustify, Layout } from "lucide-react";
import CodeBlock from "@subComponents/CodeBlock";
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';

const HTMLTables = () => {
  return (
    <div className="container p-8 mb-24">
      <h1 className="mb-4 text-5xl font-bold">Understanding Tables in HTML</h1>

      <p className="mb-6">
        Tables are a powerful way to display data in an organized grid-like format.
        HTML provides a straightforward way to create tables to arrange data in rows and columns.
      </p>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Table className="mr-2" /> Basic Table Structure
        </h2>
        <p className="mb-4">
          A basic HTML table is created using the <code className="border-none shadow-none">&lt;table&gt;</code> element. Inside it, you define rows with
          the <code className="border-none shadow-none">&lt;tr&gt;</code> element, and within each row, you add cells using the
          <code className="border-none shadow-none">&lt;td&gt;</code> element. Here’s an example:
        </p>
        <CodeBlock
          code={`<table>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>`}
          language="html"
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Columns className="mr-2" /> Adding Table Headers
        </h2>
        <p className="mb-4">
          To add headers to your table, use the <code className="border-none shadow-none">&lt;th&gt;</code> element inside your rows. This typically goes in
          the first row to label each column:
        </p>
        <CodeBlock
          code={`<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>`}
          language="html"
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <AlignJustify className="mr-2" /> Merging Cells
        </h2>
        <p className="mb-4">
          Sometimes you might need to merge cells across columns or rows. This is done using the
          <code className="border-none shadow-none">colspan</code> or <code className="border-none shadow-none">rowspan</code> attributes. For example, merging two columns:
        </p>
        <CodeBlock
          code={`<table>
  <tr>
    <th colspan="2">Merged Header</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td colspan="2">Row 2, Merged Cells</td>
  </tr>
</table>`}
          language="html"
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Layout className="mr-2" /> Styling Tables
        </h2>
        <p className="mb-4">
          Tables can be styled using CSS to improve their appearance. You can add borders, adjust padding,
          and align text to make your tables more readable:
        </p>
        <CodeBlock
          code={`table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}`}

          language="css"
        />
      </section>

      <section>
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Info className="mr-2" /> Best Practices for Using Tables
        </h2>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            <strong>Use Tables for Tabular Data</strong>: Tables should be used to display structured data. Avoid using tables for layout purposes.
          </li>
          <li className="mb-2">
            <strong>Keep Tables Simple</strong>: Complex tables with too many rows and columns can be difficult to read. Break down large tables where possible.
          </li>
          <li>
            <strong>Ensure Accessibility</strong>: Use <code className="border-none shadow-none">&lt;th&gt;</code> for headers and consider adding <code className="border-none shadow-none">scope</code> attributes for better accessibility.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HTMLTables;