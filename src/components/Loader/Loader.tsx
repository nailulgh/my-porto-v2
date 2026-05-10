import { Container } from './styles';

export function Loader() {
  return (
    <Container>
      <div className="glitch-wrapper">
        <h1 className="glitch" data-text="<Nailul Ghufron/>">
          {"<Nailul Ghufron/>"}
        </h1>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    </Container>
  );
}
