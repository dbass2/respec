interface Element {
  /*
   * This signature helps JSDoc to assert types in a separate line:
   * / @type {HTMLElement} /
   * const parent = child.closest(selector);
   *
   * Rather than:
   * const parent = / @type {HTMLElement} / (child.closest(selector));
   */
  closest<T extends Element>(selector: string): T | null;
}

declare module "text!*" {
  const value: string;
  export default value;
}

declare var respecConfig: any;
interface Window {
  respecVersion: string;
}

interface Document {
  respecIsReady: Promise<void>;
  createNodeIterator<T>(root: Node, whatToShow?: number, filter?: (node: T) => number | null): NodeIterator<T>;
  createTreeWalker<T>(root: Node, whatToShow?: number, filter?: (node: T) => boolean | null): TreeWalker<T>;
}

interface NodeIterator<T extends Node> {}
interface TreeWalker<T extends Node> {}

interface Node {
  cloneNode<T extends Node = this>(deep?: boolean): T;
}

declare function fetch(input: URL, init?: RequestInit): Promise<Response>;

module "core/xref" {
  export interface RequestEntry {
    term: string;
    id: string;
    types: string[];
    specs?: string[][];
    for?: string;
  }

  export interface SearchResultEntry {
    uri: string;
    shortname: string;
    spec: string;
    type: string;
    normative: boolean;
    for?: string[];
  }

  export interface Response {
    result: {
      [id: string]: SearchResultEntry[];
    };
    query?: RequestEntry[];
  }
}
