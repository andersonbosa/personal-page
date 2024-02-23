export default function Loading () {
  return (
    <div
      title="..."
      className="flex items-center justify-center min-h-screen min-w-screen  bg-base-100 ">
      <span className="fixed loading loading-spinner loading-md bg-primary scale-[4]"> </span>
      <span className="fixed loading loading-ring loading-lg bg-primary scale-[1]"></span>
    </div>
  )
}
