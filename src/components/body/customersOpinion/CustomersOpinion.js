import React from "react";
import {
  Avatar,
  Card,
  Fab,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./CustomersOpinion.css";

export default function CustomersOpinion() {
  return (
    
      <div className="customers">
        <div className="customeropinion-wrapper">
          <Typography variant="h6" className="colorGray bold">
            WHAT OUR CUSTOMERS SAY
          </Typography>
          <div className="cards">
            <Card className="card">
              <CardContent>
                <CardActions disableSpacing>
                  <Avatar aria-label="recipe" className="">
                    JY
                  </Avatar>
                  <div style={{ paddingLeft: "10px" }}>
                    <Typography className="bold">JENNY</Typography>
                    <Typography className="bold colorGray">
                      CEO ZOMATO
                    </Typography>
                  </div>
                </CardActions>
                <Typography>
                  Nunc id nulla placerat, mattis ipsum sit amet, elementum est.
                  Suspendisse potenti. Cras tempor urna sit amet. Cras tempor
                  urna sit amet.
                </Typography>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <CardActions disableSpacing>
                  <Avatar aria-label="recipe" className="">
                    KY
                  </Avatar>
                  <div style={{ paddingLeft: "10px" }}>
                    <Typography className="bold">KENNY</Typography>
                    <Typography className="bold colorGray">
                      ENGINEER FACEBOOK
                    </Typography>
                  </div>
                </CardActions>
                <Typography>
                  Nunc id nulla placerat, mattis ipsum sit amet, elementum est.
                  Suspendisse potenti. Cras tempor urna sit amet. Cras tempor
                  urna sit amet.
                </Typography>
              </CardContent>
            </Card>
            <Fab size="medium" aria-label="go" className="fab marginTop20">
              <ArrowRightAltIcon />
            </Fab>
          </div>
        </div>
      </div>
    
  );
}
