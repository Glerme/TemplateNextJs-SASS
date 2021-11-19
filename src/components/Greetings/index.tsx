import Image from 'next/image';

export const Greetings: React.FC = () => (
  <div>
    <p className="heading1">NextJS Starter Template!!</p>

    <div>
      <Image
        src="/react.png"
        width={250}
        height={250}
        alt="React"
        title="React"
      />
    </div>

    <p className="body2">
      An NextJS template including Typescript, Styled-components and ESLint.
    </p>
  </div>
);
