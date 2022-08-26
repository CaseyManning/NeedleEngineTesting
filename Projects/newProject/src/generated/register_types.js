import { TypeStore } from "@needle-tools/engine/engine/engine_typestore"

// Import types
import { PlayerInit } from "../scripts/PlayerInit.ts";
import { Rotate } from "../scripts/Rotate.ts";

// Register types
TypeStore.add("PlayerInit", PlayerInit);
TypeStore.add("Rotate", Rotate);
