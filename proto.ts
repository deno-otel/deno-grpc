import type {
  Field,
  Message,
  Method,
  ReflectionObject,
  Root,
  Service,
  Type,
} from "https://raw.githubusercontent.com/protobufjs/protobuf.js/v6.10.2/index.d.ts";

import protobuf from "./vendor/protobuf@v6.10.2.js";

const lib = protobuf.exports as any;

export { Field, Message, Method, ReflectionObject, Root, Service, Type };

export function parse(proto: string): { package: string; root: Root } {
  return lib.parse(proto);
}
