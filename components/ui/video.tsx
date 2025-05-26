export function Video() {
  return (
    <video className="border bg-bg-green rounded-large aspect-video" width="1280" height="720" poster="/thumbnail-Introduction.jpg" controls preload="none">
      <source src="/introduction-video.webm" type="video/webm" />
      <source src="/introductionLesson-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}