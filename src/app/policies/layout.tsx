export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <article className="prose prose-zinc mx-auto">
        {children}
      </article>
    </div>
  )
}
