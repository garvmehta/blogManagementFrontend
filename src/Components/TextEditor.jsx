import React, { useEffect, useState } from 'react';
import { EditorState , ContentState, convertFromHTML, convertToRaw} from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';

function TextEditor({initalValue, onChange}) {
  const blockHTML = convertFromHTML(initalValue)
  const content = ContentState.createFromBlockArray(
    blockHTML.contentBlocks,
    blockHTML.entityMap
  );
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(content),
  );

    // useEffect(()=>{
    //   setEditorState(EditorState.createWithContent)
    // },[])
  return (
    <div className="App">
      <Editor
        toolbar={
          {
            options: ['inline', 'textAlign'],
          }
        }

        editorState={editorState}
        onEditorStateChange={(editorState)=>{
          setEditorState(editorState);
          // console.log();
          onChange((state)=>{
            return { ...state, description : draftToHtml(convertToRaw(editorState.getCurrentContent()))};
          });
        }}
        wrapperClassName="demo-wrapper"
        editorClassName="editor-class editor-class"
      // editorClassName="demo-editor p-2"
      />
    </div>
  )
}
export default TextEditor;