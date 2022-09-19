import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Content() {
  return (
    <div class="content">
      <div class="main-content">
        <Stories />
        <ion-icon class="right-arrow" name="chevron-forward-circle"></ion-icon>
        <Feed />
      </div>
      <Sidebar />
    </div>
  );
}
