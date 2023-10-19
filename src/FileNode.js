const PATH_SEP = "\\";

class FileNode {
  #path;
  #isFile;
  #children;

  constructor({ path, isFile, data = null }) {
    if (path === undefined || path === null) {
      throw new Error("Missing `path` argument");
    }

    if (isFile === undefined || isFile === null) {
      throw new Error("Missing `isFile` argument");
    }

    this.#path = path;
    this.#isFile = isFile;
    this.#children = null;
    this.data = null;

    if (isFile) {
      if (data === undefined || data === null) {
        throw new Error("Missing `data` argument");
      }

      this.data = data;
    } else {
      this.#children = new Map();
    }
  }

  get path() {
    return this.#path;
  }

  get isFile() {
    return this.#isFile;
  }

  name() {
    return this.#path.split(PATH_SEP).at(-1);
  }

  addChild(fileNode) {
    if (!(fileNode instanceof FileNode)) {
      throw new Error("argument must be a FileNode");
    }

    if (this.isFile) {
      throw new Error("cannot add child to file");
    }

    if (!fileNode.#path.startsWith(this.#path)) {
      throw new Error(
        `provided FileNode ("${fileNode.path}") is not a child of this FileNode ("${this.path}")`,
      );
    }

    if (this.#path.length === fileNode.#path.length) {
      throw new Error(`duplicate FileNode ("${fileNode.path}")`);
    }

    const nextPathSepIndex = fileNode.#path.indexOf(
      PATH_SEP,
      this.#path.length + 1,
    );

    if (nextPathSepIndex === -1) {
      const name = fileNode.#path.slice(this.#path.length + 1);

      if (this.#children.has(name)) {
        throw new Error(`duplicate FileNode ("${fileNode.path}")`);
      }

      this.#children.set(name, fileNode);
    } else {
      const name = fileNode.#path.slice(
        this.#path.length + 1,
        nextPathSepIndex,
      );

      if (!this.#children.has(name)) {
        const newFileNode = new FileNode({
          path: fileNode.#path.slice(0, nextPathSepIndex),
          isFile: false,
        });
        this.#children.set(name, newFileNode);
      }

      this.#children.get(name).addChild(fileNode);
    }
  }

  *iterChildren() {
    if (this.isFile) {
      throw new Error("cannot iter over the children of a file");
    }

    for (const child of this.#children.values()) {
      yield child;
    }
  }

  *iterDfs() {
    if (this.isFile) {
      throw new Error("cannot iter over the descendants of a file");
    }

    const stack = [];
    stack.push(this);

    while (stack.length !== 0) {
      const fileNode = stack.pop();
      yield fileNode;

      if (!fileNode.isFile) {
        for (const child of fileNode.iterChildren()) {
          stack.push(child);
        }
      }
    }
  }

  toString() {
    return `FileNode(path=\"${this.#path}\")`;
  }
}

export default FileNode;
