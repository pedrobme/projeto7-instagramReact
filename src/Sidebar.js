import Footnotes from "./Footnotes";
import ProfileInfo from "./ProfileInfo";
import Suggestions from "./Suggestions";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <div className="fixed-sidebar">
        <ProfileInfo />
        <div class="sidebar-tittle">
          <p class="font-suggest-tittle1">Sugestões para você</p>
          <p class="font-suggest-tittle2">Ver tudo</p>
        </div>
        <Suggestions />
        <Footnotes />
      </div>
    </div>
  );
}
