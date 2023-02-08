
export const AllSuggestions = ({fullName, address, walkName}) => {
    
    return <section className="suggestion">
            <div className="suggest-userName">Suggested by: {fullName}</div>
            <div className="suggest-walkName">Walk Name: {walkName}</div>
            <div className="suggest-address">Address: {address}</div>
          </section>
    }
  