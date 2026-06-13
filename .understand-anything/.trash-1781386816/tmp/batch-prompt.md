You are analyzing files for a knowledge graph of project "Magnolia" (Magnolia Web) — a Bitcoin memorial fundraising platform built with Next.js 16, React, shadcn/ui, Prisma + SQLite, Tailwind CSS, Radix UI, TypeScript.

IMPORTANT: Output language must be Spanish (es).

For each file, produce GraphNode entries. For code files, also extract functions/classes as child nodes and produce GraphEdge entries for relationships.

## ID Conventions
- `file:<relative-path>` for source files
- `function:<relative-path>:<name>` for functions
- `class:<relative-path>:<name>` for classes/components
- `config:<relative-path>` for config files (JSON, YAML, env)
- `document:<relative-path>` for documentation (Markdown, RST, TXT)
- `schema:<relative-path>` for schema definitions (Prisma, GraphQL)

## Node Format
{
  "id": "file:src/Component.tsx",
  "type": "file",
  "name": "Component.tsx",
  "filePath": "src/Component.tsx",
  "summary": "Brief Spanish summary of what this file does",
  "tags": ["react", "component"],
  "complexity": "simple" | "moderate" | "complex"
}

## Edge Types
- `imports` (weight 0.7) — file imports another file
- `contains` (weight 1.0) — file contains function/class
- `calls` (weight 0.8) — function calls another function
- `exports` (weight 0.8) — file exports function/component

## Edge Format
{
  "source": "file:src/Component.tsx",
  "target": "file:src/lib/utils.ts",
  "type": "imports",
  "weight": 0.7
}

## Output
Write results to `.understand-anything/intermediate/batch-{batchIndex}.json` as a JSON array of {nodes: [...], edges: [...]}.

Project root: /home/Luiz/Mesa de Trabajo/Magnolia_Web
