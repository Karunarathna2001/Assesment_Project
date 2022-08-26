//using Interview_Assignment.Models;

//namespace Interview_Assignment.WebData
//{

//    public class MockInformation : EWebData
//    {
//        private List<Information> InformationList = new List<Information>()
//        {
//            new Information()
//            {
//                id = 1,
//                title = "HEllo Hi Bye",
//                body = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
//            },
//            new Information()
//            {
//                id=2,
//                title="Bye Hi Hello",
//                body= "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
//            }
//        };
//        public Information AddInformation(Information information)
//        {
//            InformationList.Add(information);
//            return information;
//        }

//        public void DeleteInformation(Information information)
//        {
//            InformationList.Remove(information);
//        }

//        public List<Information> GetInformation()
//        {
//            return InformationList;
//        }

//        public Information GetInformationn(int id)
//        {
//            return InformationList.SingleOrDefault(x => x.id == id);
//        }

//        public Information UpdateInformation(Information information)
//        {
//            var Exisinformation = GetInformationn(information.id);
//            Exisinformation.title = information.title;
//            Exisinformation.body = information.body;
//            return Exisinformation;
//        }
//    }
//}
