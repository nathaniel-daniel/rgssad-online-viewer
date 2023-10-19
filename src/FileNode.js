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

  addChild(path, fileNode) {
    if (this.isFile) {
      throw new Error("cannot add child to file");
    }

    const [name, ...pathTail] = path.split("\\");

    if (pathTail.length === 0) {
      fileNode.name = name;

      if (this.children.has(name)) {
        throw new Error("duplicate file node");
      }

      this.children.set(name, fileNode);
    } else {
      if (!this.children.has(name)) {
        const fileNode = new FileNode({
          name,
          isFile: false,
        });
        this.children.set(name, fileNode);
      }

      this.children.get(name).addChild(pathTail.join("\\"), fileNode);
    }
  }
}

export default FileNode;
