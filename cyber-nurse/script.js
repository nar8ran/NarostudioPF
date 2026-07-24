/* =================================================================
 *  Cyber Nurse — フロントのちょっとした動き（ビルド不要のプレーンJS）
 *  全ページ共通で読み込まれ、必要な部分だけ動きます。
 * ================================================================= */
(() => {
  "use strict";

  /* ---- フッターの年号を自動更新 ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- モバイル：ハンバーガーメニューの開閉 ---- */
  const hdr = document.querySelector(".hdr");
  const toggle = document.querySelector(".nav-toggle");
  if (hdr && toggle) {
    toggle.addEventListener("click", () => {
      const open = hdr.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // メニュー内リンクを押したら閉じる
    hdr.querySelectorAll(".nav a").forEach((a) =>
      a.addEventListener("click", () => hdr.classList.remove("is-open"))
    );
  }

  /* ---- TOP：ヒーロー映像 ----
     動画を入れていれば再生。src が無い / 読み込めない場合は、
     背後のアニメーション背景（.hero__fallback）をそのまま見せます。 */
  const heroVideo = document.querySelector(".hero__video");
  if (heroVideo && heroVideo.getAttribute("src")) {
    const p = heroVideo.play();
    if (p && p.catch) p.catch(() => {});
    heroVideo.addEventListener("error", () => {
      heroVideo.style.display = "none"; // 読み込めなければ背景を表示
    });
  } else if (heroVideo) {
    heroVideo.style.display = "none";
  }

  /* ---- スクロールで浮かび上がる演出（.rise） ---- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const risers = document.querySelectorAll(".rise");
  if (risers.length && !reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    risers.forEach((el) => io.observe(el));
  } else {
    // 演出オフ環境ではそのまま表示
    risers.forEach((el) => el.classList.add("in"));
  }
})();
