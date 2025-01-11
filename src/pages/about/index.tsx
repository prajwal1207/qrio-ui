// import FoundersCard from "../../components/Founders";
import Book from "../../components/BookCard/index.tsx";
import CubeCard from "../../components/CubeCard/index.tsx";
import { GalaxyParallax } from "../../components/Gaxaxy";
import { FOUNDER_DETAILS } from "../../constants/constant.tsx";

const AboutPage = () => {
  return (
    <main>
      <GalaxyParallax>
        <section className="h-screen flex justify-center items-center px-10">
          <h1 className="text-8xl font-bold text-white">
            Meet the Wizards Behind the Curtain at qrio.
          </h1>
          <CubeCard />
        </section>
        <section className="flex-col items-center justify-center w-screen px-20 text-white">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl">
              Our Story: From College Dreams to Creative Realities
            </h1>
            <p className="text-3xl">
              Ever wondered what happens when four college buddies with a knack
              for breaking the mold decide to create something together? Enter
              Qrio, born in the heart of Indore, the cleanest city in India,
              where we decided to clean up the marketing mess with our fresh,
              innovative approaches. Here's a sneak peek at the dream team that
              makes the magic happen.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl">Meet the Co-Founders</h1>
            <p className="text-3xl">
              At Qrio, our leadership isn't just steering the ship; they're
              throwing the best party on deck. Meet the fantastic four who
              turned their college brainstorming sessions into the powerhouse
              that is Qrio today. They’re not just co-founders; they’re
              trendsetters turning the marketing world on its head.
            </p>
          </div>
        </section>

        <section className="h-screen flex-col flex items-center justify-center">
          <div>
            <p className="text-white text-4xl font-bold p-20">
              Meet the creative geniuses behind Qrio! From college buddies to
              co-founders, d iscover the dynamic team that's redefining marketing
              with a blend of expertise, creativity, and unmatched
            </p>
          </div>

          <div className="flex justify-around w-screen px-20 ">
            {FOUNDER_DETAILS.map((item, index) => (
              <Book
                key={index}
                name={item.name}
                image={item.image}
                text={item.desc}
              />
            ))}
          </div>
        </section>
      </GalaxyParallax>
    </main>
  );
};

export default AboutPage;



// function Atom(props:any) {
//   const points = useMemo(
//     () =>
//       new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
//         100
//       ),
//     []
//   );
//   return (
//     <group {...props}>
//       <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
//       <Line
//         worldUnits
//         points={points}
//         color="turquoise"
//         lineWidth={0.3}
//         rotation={[0, 0, 1]}
//       />
//       <Line
//         worldUnits
//         points={points}
//         color="turquoise"
//         lineWidth={0.3}
//         rotation={[0, 0, -1]}
//       />
//       <Electron position={[0, 0, 0.5]} speed={6} />
//       <Electron
//         position={[0, 0, 0.5]}
//         rotation={[0, 0, Math.PI / 3]}
//         speed={6.5}
//       />
//       <Electron
//         position={[0, 0, 0.5]}
//         rotation={[0, 0, -Math.PI / 3]}
//         speed={7}
//       />
//       <Sphere args={[0.55, 64, 64]}>
//         <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
//       </Sphere>
//     </group>
//   );
// }

// function Electron({ radius = 2.75, speed = 6, ...props }) {
//   const ref: any = useRef();
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * speed;
//     ref.current.position.set(
//       Math.sin(t) * radius,
//       (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
//       0
//     );
//   });
//   return (
//     <group {...props}>
//       <Trail
//         local
//         width={5}
//         length={6}
//         color={new THREE.Color(2, 1, 10)}
//         attenuation={(t) => t * t}
//       >
//         <mesh ref={ref}>
//           <sphereGeometry args={[0.25]} />
//           <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
//         </mesh>
//       </Trail>
//     </group>
//   );
// }