function RSVPForm() {
  return (
    <div>
      <form>
        <div id="form-item-1">
        <label>
          Full Name:
          <input type="text" name="name" />
        </label>
        </div>
        <div id="form-item-2" class="radio">
            Will you be attending?
          <input
            type="radio"
            id="RSVPyes"
            name="attending"
            value="yes"
          />
          <label for="RSVPyes">Yes</label>

          <input
            type="radio"
            id="RSVPno"
            name="attending"
            value="no"
          />
          <label for="RSVPno">No</label>
        </div>
        <div id="form-item-3" class="radio">
            Do you need a +1?
          <input
            type="radio"
            id="RSVPyes"
            name="attending"
            value="yes"
          />
          <label for="RSVPyes">Yes</label>

          <input
            type="radio"
            id="RSVPno"
            name="attending"
            value="no"
          />
          <label for="RSVPno">No</label>
          <p>Please only plus ones if you have a friend in town!</p>
        </div>

        <div id="form-item-4" class="radio">
            Do you have a cooler/esky?
          <input
            type="radio"
            id="yesCooler"
            name="attending"
            value="yes"
          />
          <label for="yesCooler">Yes, I can bring it!</label>

          <input
            type="radio"
            id="noCooler"
            name="attending"
            value="no"
          />
          <label for="noCooler">No, but I can bring ice!</label>
        </div>
        
        <div id="form-button">
            <button class="bg-teal-500">
                <input type="submit" value="Submit"/>
            </button>
        </div>
      </form>
    </div>
  );
}

export default RSVPForm;
