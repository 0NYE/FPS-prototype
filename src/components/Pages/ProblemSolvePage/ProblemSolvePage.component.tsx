import Header from "@/components/Header/Header.component";
import MultipleCodeEditor from "@/components/MultipleCodeEditor/MultipleCodeEditor.component";
import { ProblemSolvePageLayout, ProblemSolvePageMain } from "@/components/Pages/ProblemSolvePage/ProblemSolvePage.styles";

const ProblemSolvePage = () => {
  return <ProblemSolvePageLayout>
    <Header/>
    <ProblemSolvePageMain>
      <MultipleCodeEditor/>
    </ProblemSolvePageMain>
  </ProblemSolvePageLayout>;
};

export default ProblemSolvePage;
