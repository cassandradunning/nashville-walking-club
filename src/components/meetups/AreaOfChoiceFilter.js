export const AreaOfChoiceFilter = ({ areaChoice, setAreaChoice, areaOfTowns }) => {
    return (
      <div id="filter-bar">
        <select
          className="filter-box"
          value={areaChoice}
          id="meetup-select"
          onChange={(event) => {
            setAreaChoice(parseInt(event.target.value))
          }}
        >
          <option value="0">All Meetups</option>
          {areaOfTowns.map((areaOfTown) => {
            return (
              <option key={areaOfTown.id} value={areaOfTown.id}>
                {areaOfTown.areaName}
              </option>
            )
          })}
        </select>
    
      </div>
    )
  }