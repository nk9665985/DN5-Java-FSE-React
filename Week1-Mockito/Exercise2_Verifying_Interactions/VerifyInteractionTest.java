package junitdemo;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class VerifyInteractionTest {

    @Test
    void testVerifyInteraction() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Use mock in service
        MyService service = new MyService(mockApi);

        // Call method
        service.fetchData();

        // Verify interaction
        verify(mockApi).getData();
    }
}
