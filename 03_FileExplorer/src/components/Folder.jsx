import React, { useState } from "react";
import "../styles/folder.css";

function Folder({insertSingleNode, explorer }) {
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [expand, setExpand] = useState(false);

  function createFileFolder(e, isFolder) {
    e.stopPropagation();
    setExpand(true)
    console.log("called");
    setShowInput({
      visible: true,
      isFolder,
    });
  }

  function addFolder(e) {
    if(e.target.value && e.keyCode === 13) {
      insertSingleNode(explorer.id, e.target.value, showInput.isFolder)
      setShowInput({...showInput, visible: false})
    }
  }

  if (explorer.isFolder) {
    return (
      <div>
        <div
          className="folder"
          onClick={() => {
            setExpand((prev) => !prev);
          }}
        >
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => createFileFolder(e, true)}>
              Folder +{" "}
            </button>
            <button onClick={(e) => createFileFolder(e, false)}>File + </button>
          </div>
        </div>

        <div>
          {showInput.visible && (
            <div style={{marginLeft: '15px'}}>
              {showInput.isFolder ? "📁" : "📄"}
              <input type="text" 
              onBlur={() => setShowInput(false)}
              autoFocus
              onKeyDown={addFolder}
              />
            </div>
          )}
          <div
            className="file"
            style={{
              display: expand ? "block" : "none",
              marginLeft: "15px",
            }}
          >
            {explorer.items.map((exp) => {
              return <Folder 
              insertSingleNode={insertSingleNode}
              explorer={exp}></Folder>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <span>📄{explorer.name}</span>;
  }
}

export default Folder;
