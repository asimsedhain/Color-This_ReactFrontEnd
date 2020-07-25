import React from "react";
import { Row, Col, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { Element } from "react-scroll";

function UploadBox({submitUrl, changeSubmitUrl, uploadImage, exampleImages, handleExampleImageClick, handleImageChange, inputValue}) {

	return (

		<Row>
			<Col sm="9" md="7" lg="5" className="mx-auto">
				<Card className="my-3" style={{ borderRadius: 5 }}>
					<CardHeader tag="h5" className="text-center bg-light text-dark">Colorize Your Image</CardHeader>
					<CardBody>
						<CardText tag="h6" className="text-secondary"><SwitchText submitUrl={submitUrl} changeSubmitUrl={changeSubmitUrl}/></CardText>
						<form className="form-signin" id="form" action="/upload" method="POST" encType="multipart/form-data" >
							<div className="form-group" onSubmit={uploadImage}>
								<input type={submitUrl?"text": "file"} id="Image" className="form-control" style={{ borderRadius: 0 }} name="Original" placeholder="Submit URL" required onChange={handleImageChange} value={inputValue} />
							</div>
							<button className="btn yellow btn-block text-uppercase text-light" value="Submit" id="login"
								type="submit" onClick={uploadImage} style={{ borderRadius: 0 }}>Submit</button>
						</form>
						<div className="mt-3">

							<CardText tag="h5" className="text-secondary">Or, Try a Sample Image</CardText>

							<div className="d-flex" style={{ borderRadius: 0 }}>
								<Element name="SampleImages">
									<Row>
										{exampleImages.map((image) =>
											<Col key={image.id}>
												<img src={image.src} alt="Sample" style={image.selected ? { borderRadius: 5 } : { filter: "grayscale(100%)", borderRadius: 5 }} className="img-thumbnail" onClick={handleExampleImageClick.bind(this, image.id)} ></img>
											</Col>
										)}

									</Row>

								</Element>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)

}


const Span = ({children, changeSubmitUrl})=>{
	return (<span style={{color:"#427AA1" , cursor:"pointer"}} onClick={changeSubmitUrl}>{children}</span>)
}
const SwitchText = ({submitUrl, changeSubmitUrl})=>{
	return !submitUrl?(<>Submit an Image or <Span changeSubmitUrl={changeSubmitUrl}>URL</Span></>):(<>Submit an URL or <Span changeSubmitUrl={changeSubmitUrl}>Image</Span></>)

}

export default UploadBox;
