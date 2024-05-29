import React, { useState } from 'react'
import { explorer } from './data/folderData'
import Folder from './components/Folder'
import useTraverseTree from './hooks/useTraverseTree'


function App() {

  const [explorerData, setExplorerData] = useState(explorer)

  const {insertNode} = useTraverseTree()

  function insertSingleNode(folderId, item, isFolder) {
    const actualTree = insertNode(explorerData, folderId, item, isFolder)

    setExplorerData(actualTree)
  }

  console.log(explorerData)
  return (
    <div>
      <Folder insertSingleNode={insertSingleNode} explorer={explorerData}></Folder>
    </div>
  )
}

export default App
