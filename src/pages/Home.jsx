import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quam
        veritatis, ipsam doloremque excepturi eligendi aut explicabo ipsum!
        Omnis eos quisquam, quos fugiat quis labore cupiditate laborum facilis
        nihil temporibus beatae, laboriosam itaque ipsum accusantium, provident
        doloribus neque voluptatibus accusamus officia explicabo voluptas. Est
        dignissimos consequuntur iure inventore accusamus sunt alias
        necessitatibus id, officiis beatae quos nobis eveniet quam officia
        corporis maiores fuga culpa provident enim illum eaque voluptate quas!
        Libero suscipit perspiciatis voluptate laboriosam voluptatem quia
        temporibus quaerat vitae ducimus, inventore modi ex cupiditate, cumque
        sint facilis exercitationem nam error rem voluptates atque facere,
        impedit alias. Asperiores, eos laborum!
      </p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat commodi iusto dolorem nam provident illo nesciunt obcaecati fugit est.<Link to={"/about"}>Learn more</Link></p>
    </>
  );
};
export default Home;
