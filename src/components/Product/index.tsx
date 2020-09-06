import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";
import {
  Container,
  Row,
  Column,
  Panel,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um Igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage}></img>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4> Garantia </h4>
    <div>
      <span>
        <p className="title">Compra garantia com Lorem Impsun</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href=""> Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac mi
      vitae dolor dapibus pellentesque. Nunc feugiat libero ligula, nec congue
      ex auctor sed. Aliquam accumsan, libero a pretium vestibulum, purus tellus
      lacinia ante, at rutrum dui augue vel purus. Proin ultricies sit amet
      justo nec placerat. Sed et auctor diam. Duis eu orci vel mauris interdum
      dictum at non ex. Ut molestie pellentesque sodales. Phasellus ut nibh
      sagittis, suscipit purus vel, volutpat ex. Donec vitae urna sed nibh
      rhoncus placerat sit amet sed turpis. Pellentesque semper turpis in
      lobortis pellentesque. Sed vitae laoreet turpis, ut maximus lacus. Quisque
      dignissim, erat sit amet cursus commodo, dolor arcu sagittis ipsum, sed
      rhoncus lorem libero vitae magna. Nunc consectetur ullamcorper elit,
      dignissim rhoncus tellus aliquet pulvinar. Etiam ut consectetur erat.
      Proin id libero vitae velit pellentesque vestibulum eu ut turpis. Quisque
      in ipsum tincidunt, posuere arcu quis, laoreet neque. Cras porta tempus
      nunc blandit interdum. Cras id consectetur erat, eu luctus est. Donec non
      tellus eu mi pharetra lacinia. Sed nibh diam, molestie a enim vel,
      hendrerit cursus lectus. Aenean sagittis euismod ligula vel fermentum.
      Donec pulvinar, lectus sed ornare scelerisque, purus neque interdum nulla,
      semper lobortis risus odio at tellus.
      <br />
      <br />
      Itens Inclusos: <br />
      Fazer algo depois aqui
    </p>
  </Description>
);

export default Product;
