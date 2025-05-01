import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TestEditor() {
  return (
    <div className="p-4">
      <Editor
        apiKey="ubnppqs8x4kquhtl4m6wgcw63z09hd7ed7x0lmasqb5zai9i"  // Ensure this key is valid
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist", "autolink", "lists", "link", "image",
            "charmap", "preview", "anchor", "searchreplace",
            "visualblocks", "code", "fullscreen", "insertdatetime",
            "media", "table", "help", "wordcount"
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </div>
  );
}
