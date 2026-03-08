interface SectionHeadingProps {
  titulo: string;
  subtitulo?: string;
}

export default function SectionHeading({
  titulo,
  subtitulo,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{titulo}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto rounded-full" />
      {subtitulo && (
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
          {subtitulo}
        </p>
      )}
    </div>
  );
}
