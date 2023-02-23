import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="App">
      <Editor
        toolbar={
          {
            options: ['inline', 'textAlign'],
          }
        }

        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="demo-wrapper"
        editorClassName="editor-class editor-class"
      // editorClassName="demo-editor p-2"
      />
    </div>
  )
}
export default TextEditor;