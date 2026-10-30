// ===== STACK: edit freely =====
const STACK = [
  { group: "Languages", items: "Python, SQL, JavaScript" },
  { group: "ML (learning)", items: "scikit-learn, PyTorch, pandas, NumPy" },
  { group: "Backend & tooling", items: "REST APIs, Git, Docker, VS Code" }
];

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
};

// ---- projects ----
const list = document.getElementById("project-list");
PROJECTS.forEach((p, i) => {
  const d = el("details", "run");
  if (i === 0) d.open = true;

  const s = el("summary");
  s.append(
    el("span", "run-name", p.name),
    el("span", "run-tag", p.tagline),
    el("span", "run-status" + (p.status === "wip" ? " wip" : ""), p.status === "wip" ? "in progress" : "shipped")
  );

  const body = el("div", "run-body");
  const left = el("div");
  p.description.forEach(t => left.append(el("p", "", t)));
  const chips = el("div", "chips");
  p.stack.forEach(t => chips.append(el("span", "", t)));
  left.append(chips);

  const right = el("div");
  const dl = el("dl", "metrics");
  p.metrics.forEach(m => dl.append(el("dt", "", m.label), el("dd", "", m.value)));
  right.append(dl);
  if (p.links.length) {
    const links = el("div", "links");
    p.links.forEach(l => {
      const a = el("a", "", l.label);
      a.href = l.url; a.target = "_blank"; a.rel = "noopener";
      links.append(a);
    });
    right.append(links);
  }

  body.append(left, right);
  d.append(s, body);
  list.append(d);
});

// ---- stack ----
const stackEl = document.getElementById("stack-list");
STACK.forEach(g => {
  const box = el("div");
  box.append(el("h3", "", g.group), el("p", "", g.items));
  stackEl.append(box);
});

