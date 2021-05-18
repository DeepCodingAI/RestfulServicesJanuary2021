package testapi;

import employee.services.SingleEmployeeResourcesAPI;
import org.testng.annotations.Test;

public class TestSingleEmployeeAPI extends SingleEmployeeResourcesAPI {


    @Test
    public void singleEmployeeValidCall(){
        getSingleEmployeeResourcesValidCall();
    }


    @Test
    public void singleEmployeeInValidCall(){
        getSingleEmployeeResourcesInValidCall();
    }

}
