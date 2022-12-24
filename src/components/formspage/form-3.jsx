import "./form.css";
const Form3 = ({ formData, setFormData }) => {
  return (
    <>
      <form id="f1" method="POST">
        <div id="f1-table">
          <div className="f1-content">
            <label>Name</label>
            <select name="property-type">
              <option>Owner</option>
              <option value="residential">Residential</option>
              <option value="Comercial">Comercial</option>
              <option value="industrial">Industrial</option>
            </select>
            <label>Posted by</label>
            <select name="property-type">
              <option>Posted By</option>
              <option value="residential">Early</option>
              <option value="Comercial">Median</option>
              <option value="industrial">Mode</option>
            </select>
            <label>Featured Package</label>
            <select name="property-type">
              <option>Please Select</option>
              <option value="residential">Early</option>
              <option value="Comercial">Median</option>
              <option value="industrial">Mode</option>
            </select>
            <div
              style={{
                backgroundColor: "#6AB4F8",
                width: "20%",
                height: "20%",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2%",
              }}
            >
              
            </div>
          </div>
          <div className="f1-content">
            <label>Mobile</label>
            <input
              placeholder="Enter Mobile Number"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            <label>Sale Type</label>
            <select name="property-type">
              <option>Please Select</option>
              <option value="residential">Early</option>
              <option value="Comercial">Median</option>
              <option value="industrial">Mode</option>
            </select>
            <label>PPD Package</label>
            <select name="property-type">
              <option>Please Select</option>
              <option value="residential">Early</option>
              <option value="Comercial">Median</option>
              <option value="industrial">Mode</option>
            </select>
            <div class="btn">
            <span>Upload Image</span>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
            
          </div>
          
        </div>
      </form>
    </>
  );
};
export default Form3;
