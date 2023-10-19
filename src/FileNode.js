const PATH_SEP = "\\";

class FileNode {
  constructor({ name, isFile, data = null }) {
    if (name === undefined || name === null) {
      throw new Error("Missing `name` argument");
    }

    if (isFile === undefined || isFile === null) {
      throw new Error("Missing `isFile` argument");
    }

    this.name = name;
    this.isFile = isFile;
    this.children = null;
    this.data = null;

    if (isFile) {
      if (data === undefined || data === null) {
        throw new Error("Missing `data` argument");
      }
      this.data = data;
    } else {
      this.children = new Map();
    }
  }

  addChild(fileNode) {
    if (this.isFile) {
      throw new Error("cannot add child to file");
    }

    if (!fileNode.name.startsWith(this.name)) {
      throw new Error(
        `provided FileNode ("${fileNode.name}") is not a child of this FileNode ("${this.name}")`,
      );
    }

    if (this.name.length === fileNode.name.length) {
      throw new Error(`duplicate FileNode ("${fileNode.name}")`);
    }

    const nextPathSepIndex = fileNode.name.indexOf(
      PATH_SEP,
      this.name.length + 1,
    );

    if (nextPathSepIndex === -1) {
      const name = fileNode.name.slice(this.name.length + 1);

      if (this.children.has(name)) {
        throw new Error(`duplicate FileNode ("${fileNode.name}")`);
      }

      this.children.set(name, fileNode);
    } else {
      const name = fileNode.name.slice(this.name.length + 1, nextPathSepIndex);

      if (!this.children.has(name)) {
        const newFileNode = new FileNode({
          name: fileNode.name.slice(0, nextPathSepIndex),
          isFile: false,
        });
        this.children.set(name, newFileNode);
      }

      this.children.get(name).addChild(fileNode);
    }
  }
}

export default FileNode;
