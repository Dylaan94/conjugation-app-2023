export default function Sidebar() {
  return (
    <section className="w-1/5 border-r border-slate-800 h-full flex flex-col">
      <h3 className="text-2xl text-white py-4">I want to practice</h3>
      <ul className="text-white">
        <li className="pl-4 pb-4">JLPT N1</li>
        <li className="pl-4 pb-4">JLPT N2</li>
        <li className="pl-4 pb-4">JLPT N3</li>
        <li className="pl-4 pb-4">JLPT N4</li>
        <li className="pl-4 pb-4">JLPT N5</li>
      </ul>
      <h3 className="text-2xl text-white py-4">Grammar Guides</h3>
      <nav className="border-l border-slate-800">
        <ul className="text-white pl-4">
          <li>Past form</li>
          <li>Te form</li>
          <li>Potential form</li>
          <li>Passive form</li>
          <li>Causative form</li>
          <li>Imperative form</li>
        </ul>
      </nav>
    </section>
  );
}
