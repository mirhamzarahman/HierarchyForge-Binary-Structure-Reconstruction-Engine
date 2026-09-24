# 🌳 HierarchyForge: Binary Structure Reconstruction Engine

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Data Structure](https://img.shields.io/badge/Data%20Structure-Binary%20Tree-blue)
![Algorithm](https://img.shields.io/badge/Algorithm-Recursive%20Reconstruction-green)

## 📌 Project Overview

HierarchyForge is a binary hierarchy reconstruction engine designed to rebuild structured relationships from two different relationship records:

- Inorder relationship mapping
- Postorder processing history

The project simulates how complex hierarchical systems can be reconstructed when only partial structural information is available.

It demonstrates efficient binary tree creation using recursion, indexed lookup, and intelligent traversal processing.

---

# 🌍 Real-World Conceptual Scenario

Imagine a company loses its organizational hierarchy database but still has two exported reports:

1. A sorted department relationship report.
2. A workflow completion report showing the order teams were processed.

HierarchyForge acts as a recovery system that reconstructs the complete hierarchy from these records.

Possible applications:

- 🏢 Organizational chart restoration
- 🗂️ File system hierarchy recovery
- 🤖 Decision tree reconstruction
- 🧬 Classification system rebuilding
- 🌐 Network structure restoration

---

# 🧠 Core Concept

A binary hierarchy stores information where each node can have:

- Left child → Sub-category / previous branch
- Right child → Secondary branch / next category

HierarchyForge rebuilds this structure by identifying:

- The current root node
- Its left hierarchy
- Its right hierarchy

using traversal relationships.

---

# ⚙️ How The System Works

The system receives two traversal records:

### Inorder Sequence


Left → Root → Right


### Postorder Sequence


Left → Right → Root


Since the last item in postorder is always the root node, the system can rebuild the hierarchy by:

1. Extracting the root from postorder.
2. Finding its position in inorder.
3. Splitting the structure into left and right sections.
4. Recursively rebuilding each branch.

---

# 🔍 Algorithm & Data Structure

## Data Structure Used

### Binary Tree

Each hierarchy element contains:

    Root
   /    \

Left Right


---

## Supporting Data Structure

### Hash Map

A JavaScript `Map` stores node positions from inorder traversal.

Example:


Node Position

A 0
B 1
C 2


This allows instant lookup instead of repeatedly searching through the array.

---

# 🪜 Step-by-Step Logic

### Step 1: Index Node Locations

Create a lookup table from inorder data.


Department → Position


---

### Step 2: Start From Postorder End

The last postorder element represents the hierarchy root.

Example:


Postorder:

Finance → HR → CEO

CEO becomes root


---

### Step 3: Build Right Branch

Because postorder is processed backwards:


Root → Right → Left


The right subtree must be created first.

---

### Step 4: Build Left Branch

After completing the right side, recursively construct the left hierarchy.

---

### Step 5: Return Completed Structure

The final output is a fully reconstructed binary hierarchy.

---

# ✨ Key Features

- ✅ Reconstructs binary hierarchical structures
- ✅ Uses optimized hash-based searching
- ✅ Handles large hierarchy datasets efficiently
- ✅ Clean recursive architecture
- ✅ Modular TreeNode implementation
- ✅ Easy to extend for real applications

--# 📚 Example Use Case

## Input Relationship Data

### Inorder Traversal

```json
[
  "Design",
  "Engineering",
  "Marketing",
  "Management",
  "Sales"
]
```

### Postorder Traversal

```json
[
  "Design",
  "Marketing",
  "Sales",
  "Management",
  "Engineering"
]
```

## Output Hierarchy

```
            Engineering
           /            \
      Design          Management
                     /          \
              Marketing        Sales
```

---

# ⏱️ Complexity Analysis

| Operation | Complexity |
|-----------|------------|
| Building index map | O(n) |
| Tree reconstruction | O(n) |
| **Total Time Complexity** | **O(n)** |
| **Space Complexity** | **O(n)** |

Where **n** represents the number of hierarchy nodes.

---

# 🛠️ Technologies Used

- JavaScript (Node.js)
- Binary Tree Data Structure
- Recursive Algorithms
- Hash Map Optimization

---

# 📁 Project Structure

```
hierarchyforge-binary-structure-reconstruction-engine/
│
├── src/
│   ├── TreeNode.js
│   ├── hierarchyBuilder.js
│   └── example.js
│
├── README.md
├── package.json
└── LICENSE
```

---

# 🚀 How To Run

## Clone Repository

```bash
git clone https://github.com/mirhamzarahman/HierarchyForge-Binary-Structure-Reconstruction-Engine.git
```

## Navigate Into Project

```bash
cd HierarchyForge-Binary-Structure-Reconstruction-Engine
```

## Install Dependencies

```bash
npm install
```

## Run Example

```bash
node src/example.js
```

---

# 🎓 Learning Outcomes

Through this project, you will understand:

- How binary trees represent hierarchical systems
- How traversal data can rebuild complex structures
- Recursive tree construction techniques
- Efficient searching using hash maps
- Designing algorithms for practical software scenarios

---

# 🔮 Future Improvements

Possible improvements:

- Add a visualization dashboard for hierarchy trees
- Support N-ary tree reconstruction
- Add database storage integration
- Implement a REST API for hierarchy recovery
- Create interactive hierarchy editing tools

---

# 📜 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and improve this project.
