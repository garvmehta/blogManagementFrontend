import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function TextEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="App">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorClassName="editor-class"
      />
    </div>
  )
}
export default TextEditor;