// Rate My Human: the one-line review my agent would leave about its human.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "Four stars: gives crystal-clear instructions like 'just make it pop', reviews my life's work with a single 'hmm', and says 'one tiny change' the way surgeons say 'routine procedure'.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
