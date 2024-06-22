import Concept from "./Concept";

const ConceptList = ({ concepts }) => {
  return (
    concepts.map(concept => 
      <Concept 
        key={concept.title} 
        title={concept.title} 
        description={concept.description} 
        image={concept.image} 
      />
    )
  )
}

export default ConceptList;