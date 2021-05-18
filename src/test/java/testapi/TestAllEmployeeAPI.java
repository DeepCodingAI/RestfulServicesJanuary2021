package testapi;

import employee.services.AllEmployeeResourcesAPI;
import org.testng.annotations.Test;

public class TestAllEmployeeAPI extends AllEmployeeResourcesAPI {

    @Test
    public void testAllEmployeeResources(){
        getAllEmployeeResources();
    }


}

